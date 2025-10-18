# Septan Developers Website

A multi-page static HTML website for Septan Developers, an architectural and interior design brand, deployed on GitHub Pages.

## Prerequisites
- **GitHub Account**: Sign up at [GitHub](https://github.com).
- **Git Installed**: Install Git from [git-scm.com](https://git-scm.com/) if not already installed.
- **Website Files**: Ensure you have the following files in a folder (`septan-developers-website`):
  - `index.html`, `about.html`, `services.html`, `projects.html`, `contact.html`
  - `styles.css`, `script.js`, `projects.json`
  - `images/` folder with `logo.png`, `favicon.ico`, and project images
  - `README.md` (this file)

## Deployment Steps

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and sign in.
   - Click "New" to create a repository named `septan-developers` (or your preferred name).
   - **Do not** initialize with a README, `.gitignore`, or license (we'll add them manually).
   - Copy the repository URL (e.g., `https://github.com/yourusername/septan-developers.git`).

2. **Set Up Locally**:
   - Open a terminal and navigate to your website folder:
     ```bash
     cd path/to/septan-developers-website
     ```
   - Initialize Git:
     ```bash
     git init
     ```
   - Add your repository as the remote:
     ```bash
     git remote add origin https://github.com/yourusername/septan-developers.git
     ```

3. **Upload Files**:
   - Add all files to Git:
     ```bash
     git add .
     ```
   - Commit the files:
     ```bash
     git commit -m "Initial website upload"
     ```
   - Push to GitHub:
     ```bash
     git push -u origin main
     ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub (e.g., `https://github.com/yourusername/septan-developers`).
   - Click **Settings** > **Pages** (under "Code and automation").
   - Under "Build and deployment":
     - Set **Source** to "Deploy from a branch".
     - Select **main** branch and `/ (root)` folder.
     - Click **Save**.
   - Wait a few minutes. GitHub Pages will deploy the site at:
     ```
     https://yourusername.github.io/septan-developers/
     ```
   - Check the URL in a browser. If it doesn't load immediately, wait 1-5 minutes for deployment.

5. **Verify Deployment**:
   - Visit `https://yourusername.github.io/septan-developers/` to confirm the site is live.
   - Test navigation, project loading (from `projects.json`), and responsiveness on mobile/desktop.
   - Check console logs (browser DevTools) for errors if projects don't load.

## Updating the Website
To update content (e.g., edit `projects.json` or add images):
1. Modify files locally (e.g., update `projects.json` or HTML files).
2. Add and commit changes:
   ```bash
   git add .
   git commit -m "Update projects"
   ```
3. Push to GitHub:
   ```bash
   git push origin main
   ```
4. GitHub Pages will auto-deploy updates within minutes.

## Notes
- **Logo and Images**: Replace `images/logo.png` and `images/favicon.ico` with your assets. Compress images (e.g., via [TinyPNG](https://tinypng.com/)) for faster loading.
- **Social Links**: Update social media URLs in all HTML files (search for `https://facebook.com`, etc.).
- **Custom Domain**: To use a custom domain, follow [GitHub's guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
- **Form Backend**: The contact form is a placeholder. Integrate with a service like [Formspree](https://formspree.io/) for functionality.
- **Troubleshooting**: If the site doesn't load, verify the branch (`main`) and folder (`/ (root)`) in GitHub Pages settings. Check file paths (case-sensitive).

## Maintenance
- Regularly update `projects.json` to add new projects without editing HTML.
- Run accessibility audits (e.g., Lighthouse in Chrome DevTools) to ensure WCAG compliance.
- Validate HTML/CSS with [W3C Validator](https://validator.w3.org/) and [CSS Validator](https://jigsaw.w3.org/css-validator/).