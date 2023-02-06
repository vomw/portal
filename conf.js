jsproxy_config({

  ver: '110',

  static_boost: {
    enable: true,
    ver: 62
  },

  node_map: {
    'demo-hk': {
      label: 'google-demo',
      lines: {
        'google.com:443': 1,
        'google.com:80': 2,
      }
    },
    'demo-sg': {
      label: 'cloudflare-demo',
      lines: {
        'www.cloudflare.com:443': 1,
      },
    },
    'mysite': {
      label: 'current-demo',
      lines: {
        [location.host]: 1,
      }
    },
    
    'cfworker': {
      label: '',
      hidden: true,
      lines: {

      }
    }
  },

  // node_default: 'mysite',
  node_default: /jsproxy-demo\.\w+$/.test(location.host) ? 'demo-hk' : 'mysite',


  node_acc: 'cfworker',


  // assets_cdn: 'https://cdn.jsdelivr.net/gh/zjcqoo/zjcqoo.github.io@master/assets/',
  assets_cdn: 'assets/',

  index_path: 'index_v3.html',

  direct_host_list: 'cors_v1.txt',

  inject_html: '<!-- custom html -->',


  url_handler: {
    'https://www.baidu.com/': {
      replace: 'https://ifconfig.me/'
    },
    'https://www.pornhub.com/': {
      redir: 'https://php.net/'
    },
    'http://qq.com/': {
      content: '<h>No Chinese website!</h>'
    },
  }
})
