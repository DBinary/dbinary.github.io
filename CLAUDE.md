# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based academic website for Lei Hu (胡磊), a Ph.D. candidate at Westlake University. It's built using the Minimal Mistakes Jekyll theme and hosted on GitHub Pages.

## AI Assistant Core Rules (八荣八耻)

### 核心行为准则
1. ✅ 以暗猜接口为耻，❌ 以认真查阅为荣。  
2. ✅ 以模糊执行为耻，❌ 以寻求确认为荣。  
3. ✅ 以盲想业务为耻，❌ 以人类确认为荣。  
4. ✅ 以创造接口为耻，❌ 以复用现有为荣。  
5. ✅ 以跳过验证为耻，❌ 以主动测试为荣。  
6. ✅ 以破坏架构为耻，❌ 以遵循规范为荣。  
7. ✅ 以假装理解为耻，❌ 以诚实无知为荣。  
8. ✅ 以盲目修改为耻，❌ 以谨慎重构为荣。  

## Essential Commands

### Local Development
```bash
# Install Ruby dependencies
bundle install

# Serve locally with live reload (recommended)
bundle exec jekyll liveserve

# Alternative: serve with development config
bundle exec jekyll serve --config _config.yml,_config.dev.yml

# Clean and reinstall if you encounter dependency issues
bundle clean
bundle install
```

### Content Generation
```bash
# Generate publications from TSV file
cd markdown_generator
python publications.py

# Generate talks from TSV file
cd markdown_generator
python talks.py
```

## Architecture & Key Components

### Jekyll Structure
- **`_config.yml`**: Main site configuration including author info, social links, and site settings
- **`_config.dev.yml`**: Development overrides (localhost URL, disabled analytics)
- **`_layouts/`**: HTML templates that define page structure (default, single, archive, talk, etc.)
- **`_includes/`**: Reusable HTML components (header, footer, analytics, etc.)
- **`_sass/`**: SCSS stylesheets for site styling
- **`_data/`**: YAML data files for navigation and other structured data

### Content Organization
- **`_pages/`**: Main content pages (about.md, education.md, research.md, publications.md, teaching.md)
- **`_publications/`**: Individual publication markdown files with specific front matter for academic papers
- **`_talks/`**: Academic talk/presentation entries
- **`_teaching/`**: Teaching experience entries
- **`_portfolio/`**: Portfolio project entries
- **`images/`**: Site images and logos
- **`files/`**: PDFs and downloadable documents

### Critical Front Matter Patterns

**Publications** require specific front matter:
```yaml
---
title: "Paper Title"
collection: publications
permalink: /publication/2023-paper-name
date: 2023-01-01
venue: 'Journal Name'
paperurl: 'https://doi.org/...'
citation: 'Your Name et al. "Paper Title." Journal Name (2023).'
---
```

**Talks** use:
```yaml
---
title: "Talk Title"
collection: talks
type: "Talk"
permalink: /talks/2023-talk-name
date: 2023-01-01
venue: "Conference Name"
---
```

### Theme Customization Points
- **`_sass/_variables.scss`**: Color scheme and typography variables
- **`_includes/head/custom.html`**: Custom HTML head content
- **`_includes/footer/custom.html`**: Custom footer content
- **`assets/css/main.scss`**: Main stylesheet entry point

## Development Workflow

1. **Content Updates**: Edit markdown files in `_pages/`, `_publications/`, `_talks/`, etc.
2. **Styling Changes**: Modify SCSS files in `_sass/` directory
3. **Layout Changes**: Edit HTML templates in `_layouts/` or components in `_includes/`
4. **Configuration**: Update `_config.yml` for site-wide settings
5. **Local Testing**: Always test changes locally with `bundle exec jekyll liveserve` before committing

## Key Dependencies
- **Jekyll**: Static site generator
- **github-pages**: GitHub Pages compatible Jekyll build
- **Minimal Mistakes Theme**: Academic-focused Jekyll theme
- **hawkins**: Live reload functionality for development

## Deployment
The site automatically deploys to GitHub Pages when changes are pushed to the repository. No manual build step required - GitHub handles Jekyll compilation.