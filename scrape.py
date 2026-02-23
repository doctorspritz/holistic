import os
import urllib.request
import re
import subprocess
from urllib.parse import urljoin, urlparse
import time

competitors = [
    "https://polln.com",
    "https://healthylife.com.au",
    "https://kinfertility.com.au",
    "https://holisticahealth.com.au",
    "https://lifemedclinic.com.au"
]

out_dir = "/Users/simonheikkila/dev/holistic/competitors"
chrome_path = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# Ensure output directory exists
os.makedirs(out_dir, exist_ok=True)

for base_url in competitors:
    domain = urlparse(base_url).netloc.replace('www.', '')
    domain_dir = os.path.join(out_dir, domain)
    os.makedirs(domain_dir, exist_ok=True)
    print(f"\n--- Processing {domain} ---")
    
    # Download homepage to find links
    try:
        req = urllib.request.Request(base_url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'})
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Failed to fetch {base_url}: {e}")
        continue
        
    # Find all links on the homepage - using a safer approach
    # We look for href="path" or href='path'
    links = re.findall(r'href=["\']([^"\\]+)["\']', html)
    top_links = {base_url}
    
    for link in links:
        full_url = urljoin(base_url, link)
        parsed = urlparse(full_url)
        # Keep only internal links that match common top-level page structures
        if parsed.netloc == urlparse(base_url).netloc or not parsed.netloc:
            path = parsed.path.strip('/').lower()
            if path in ['about', 'about-us', 'services', 'contact', 'contact-us', 'faq', 'pricing', 'treatments', 'how-it-works', 'our-team']:
                top_links.add(full_url.split('#')[0].split('?')[0])
                
    for url in list(top_links)[:5]: # Limit to max 5 pages per site to save time
        path_name = urlparse(url).path.strip('/').replace('/', '_') or 'home'
        html_file = os.path.join(domain_dir, f"{path_name}.html")
        img_file = os.path.join(domain_dir, f"{path_name}.png")
        
        print(f"-> {url} (Saving as {path_name})")
        
        # Download HTML
        try:
            subprocess.run(["curl", "-sL", url, "-o", html_file, "-A", "Mozilla/5.0"])
        except Exception:
            pass
            
        # Take Screenshot
        try:
            # Full page screenshot attempt
            subprocess.run([
                chrome_path, 
                "--headless", 
                "--disable-gpu", 
                "--hide-scrollbars", 
                "--window-size=1280,3000", 
                f"--screenshot={img_file}", 
                url
            ], timeout=20, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        except subprocess.TimeoutExpired:
            print(f"Timeout taking screenshot for {url}")
        except Exception as e:
            print(f"Failed to screenshot {url}: {e}")
        time.sleep(1) # Be polite to servers

print("\nDone! Screenshots and HTML saved in:", out_dir)
