with open('netlify.toml', 'w', encoding='utf-8', newline='\n') as f:
    f.write('[build]\n')
    f.write('  command = "vite build"\n')
    f.write('  publish = "dist"\n')
    f.write('\n')
    f.write('[[redirects]]\n')
    f.write('  from = "/*"\n')
    f.write('  to = "/index.html"\n')
    f.write('  status = 200\n')
