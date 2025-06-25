// Neubrutalism Theme - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme functionality
    initNeubrutalismTheme();
});

function initNeubrutalismTheme() {
    // Add hover effects to cards
    addCardHoverEffects();
    
    // Add smooth scrolling
    addSmoothScrolling();
    
    // Add mobile menu toggle
    addMobileMenuToggle();
    
    // Add scroll animations
    addScrollAnimations();
}

// Add hover effects to Neubrutalism cards
function addCardHoverEffects() {
    const cards = document.querySelectorAll('.neubrutalism-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translate(-2px, -2px)';
            this.style.boxShadow = '6px 6px 0 #000000';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
            this.style.boxShadow = '4px 4px 0 #000000';
        });
    });
}

// Add smooth scrolling for anchor links
function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add mobile menu toggle functionality
function addMobileMenuToggle() {
    const nav = document.querySelector('.site-navigation');
    const navMenu = document.querySelector('.nav-menu');
    
    if (nav && navMenu) {
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
        
        // Add mobile menu styles
        const style = document.createElement('style');
        style.textContent = `
            .mobile-menu-btn {
                display: none;
                background: var(--white);
                border: 2px solid var(--black);
                box-shadow: 2px 2px 0 var(--black);
                padding: 0.5rem 1rem;
                font-size: 1.2rem;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .mobile-menu-btn:hover {
                transform: translate(-1px, -1px);
                box-shadow: 3px 3px 0 var(--black);
                background: var(--accent);
            }
            
            @media (max-width: 768px) {
                .mobile-menu-btn {
                    display: block;
                }
                
                .nav-menu {
                    display: none;
                    flex-direction: column;
                    width: 100%;
                    margin-top: 1rem;
                }
                
                .nav-menu.active {
                    display: flex;
                }
                
                .nav-item {
                    width: 100%;
                }
                
                .nav-link {
                    width: 100%;
                    text-align: center;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Insert mobile menu button
        nav.insertBefore(mobileMenuBtn, navMenu);
        
        // Add toggle functionality
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
            }
        });
    }
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards and sections
    const animatedElements = document.querySelectorAll('.post-card, .sidebar-section, .neubrutalism-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.innerHTML = '☰';
            }
        }
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add loading animation styles
    const style = document.createElement('style');
    style.textContent = `
        body:not(.loaded) {
            overflow: hidden;
        }
        
        body:not(.loaded)::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--neutral);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        body:not(.loaded)::after {
            content: 'Loading...';
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: var(--heading-font);
            font-size: 2rem;
            color: var(--primary);
            z-index: 10000;
            animation: pulse 1.5s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
    `;
    document.head.appendChild(style);
});

// Add back to top button
function addBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    
    // Add back to top styles
    const style = document.createElement('style');
    style.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: var(--primary);
            color: var(--white);
            border: 3px solid var(--black);
            box-shadow: 4px 4px 0 var(--black);
            font-size: 1.5rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            opacity: 0;
            visibility: hidden;
            z-index: 1000;
        }
        
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .back-to-top:hover {
            transform: translate(-2px, -2px);
            box-shadow: 6px 6px 0 var(--black);
            background: var(--secondary);
        }
        
        @media (max-width: 768px) {
            .back-to-top {
                bottom: 10px;
                right: 10px;
                width: 40px;
                height: 40px;
                font-size: 1.2rem;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top functionality
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
addBackToTopButton();

// 增强 Markdown 功能
function enhanceMarkdownFeatures() {
  // 添加表格增强
  enhanceTables();
  
  // 添加图片懒加载
  addImageLazyLoading();
  
  // 添加链接预览
  addLinkPreviews();
  
  // 添加代码块行号
  addCodeLineNumbers();
  
  // 添加任务列表交互
  addTaskListInteraction();
  
  // 添加数学公式支持
  addMathSupport();
}

// 增强表格功能
function enhanceTables() {
  const tables = document.querySelectorAll('.post-content table');
  
  tables.forEach(table => {
    // 添加表格容器
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    wrapper.style.cssText = 'overflow-x: auto; margin: 2rem 0; border-radius: 8px; box-shadow: 4px 4px 0 var(--black);';
    
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
    
    // 添加表格标题
    const caption = table.querySelector('caption');
    if (caption) {
      caption.style.cssText = 'font-weight: bold; color: var(--primary); padding: 1rem; background: var(--accent); border-bottom: 2px solid var(--primary);';
    }
  });
}

// 添加图片懒加载
function addImageLazyLoading() {
  const images = document.querySelectorAll('.post-content img');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => {
      if (!img.src) {
        img.dataset.src = img.getAttribute('data-src');
        img.classList.add('lazy');
        imageObserver.observe(img);
      }
    });
  }
}

// 添加链接预览
function addLinkPreviews() {
  const links = document.querySelectorAll('.post-content a[href^="http"]');
  
  links.forEach(link => {
    link.addEventListener('mouseenter', function(e) {
      if (this.href && !this.title) {
        // 可以在这里添加链接预览功能
        // 例如显示链接的标题或描述
      }
    });
  });
}

// 添加代码块行号
function addCodeLineNumbers() {
  const codeBlocks = document.querySelectorAll('.post-content pre:not(.line-numbers)');
  
  codeBlocks.forEach(block => {
    const code = block.querySelector('code');
    if (!code) return;
    
    // 检查是否已经有行号
    if (block.querySelector('.line-numbers-rows')) return;
    
    const lines = code.textContent.split('\n');
    if (lines.length > 1) {
      // 创建行号容器
      const lineNumbers = document.createElement('div');
      lineNumbers.className = 'line-numbers-rows';
      
      // 添加行号
      lines.forEach((_, index) => {
        const lineSpan = document.createElement('span');
        lineNumbers.appendChild(lineSpan);
      });
      
      block.classList.add('line-numbers');
      block.insertBefore(lineNumbers, code);
    }
  });
}

// 添加任务列表交互
function addTaskListInteraction() {
  const taskItems = document.querySelectorAll('.post-content .task-list-item');
  
  taskItems.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          item.classList.add('task-list-item-checked');
        } else {
          item.classList.remove('task-list-item-checked');
        }
      });
      
      // 初始化状态
      if (checkbox.checked) {
        item.classList.add('task-list-item-checked');
      }
    }
  });
}

// 添加数学公式支持
function addMathSupport() {
  // 检查是否已加载 KaTeX
  if (typeof katex !== 'undefined') {
    const mathElements = document.querySelectorAll('.math');
    
    mathElements.forEach(element => {
      if (!element.classList.contains('katex-rendered')) {
        try {
          katex.render(element.textContent, element, {
            throwOnError: false,
            displayMode: element.classList.contains('display')
          });
          element.classList.add('katex-rendered');
        } catch (error) {
          console.warn('KaTeX rendering failed:', error);
        }
      }
    });
  }
}

// 添加目录导航
function addTableOfContents() {
  const headings = document.querySelectorAll('.post-content h1, .post-content h2, .post-content h3, .post-content h4, .post-content h5, .post-content h6');
  
  if (headings.length > 3) {
    const toc = document.createElement('div');
    toc.className = 'table-of-contents neubrutalism-card';
    toc.innerHTML = '<h3>目录</h3><ul></ul>';
    
    const tocList = toc.querySelector('ul');
    
    headings.forEach((heading, index) => {
      // 添加锚点
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
      
      // 创建目录项
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${heading.id}`;
      a.textContent = heading.textContent;
      a.className = `toc-${heading.tagName.toLowerCase()}`;
      
      li.appendChild(a);
      tocList.appendChild(li);
    });
    
    // 插入到文章开头
    const postContent = document.querySelector('.post-content');
    if (postContent) {
      postContent.insertBefore(toc, postContent.firstChild);
    }
    
    // 添加目录样式
    const style = document.createElement('style');
    style.textContent = `
      .table-of-contents {
        margin-bottom: 2rem;
        padding: 1.5rem;
      }
      
      .table-of-contents h3 {
        margin-bottom: 1rem;
        color: var(--primary);
        border-bottom: 3px solid var(--primary);
        padding-bottom: 0.5rem;
      }
      
      .table-of-contents ul {
        list-style: none;
        padding-left: 0;
      }
      
      .table-of-contents li {
        margin-bottom: 0.5rem;
      }
      
      .table-of-contents a {
        color: var(--dark);
        text-decoration: none;
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        transition: all 0.2s ease;
        display: block;
      }
      
      .table-of-contents a:hover {
        background: var(--accent);
        color: var(--black);
        transform: translateX(5px);
      }
      
      .toc-h1 { font-weight: bold; font-size: 1.1rem; }
      .toc-h2 { font-weight: bold; font-size: 1rem; margin-left: 1rem; }
      .toc-h3 { font-size: 0.95rem; margin-left: 2rem; }
      .toc-h4 { font-size: 0.9rem; margin-left: 3rem; }
      .toc-h5 { font-size: 0.85rem; margin-left: 4rem; }
      .toc-h6 { font-size: 0.8rem; margin-left: 5rem; }
    `;
    document.head.appendChild(style);
  }
}

// 添加阅读进度条
function addReadingProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
    z-index: 10000;
    transition: width 0.1s ease;
  `;
  
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
}

// 初始化所有 Markdown 增强功能
function initMarkdownEnhancements() {
  enhanceMarkdownFeatures();
  addTableOfContents();
  addReadingProgress();
}

// 在 DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme functionality
  initNeubrutalismTheme();
  
  // Initialize Markdown enhancements
  initMarkdownEnhancements();
}); 