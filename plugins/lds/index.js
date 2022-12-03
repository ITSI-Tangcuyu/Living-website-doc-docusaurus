/* 自定义插件示例 
* https://www.aknapen.nl/blog/how-to-build-a-plugin-for-docusaurus-v2/
*/

module.exports = function (context) {
  const { siteConfig } = context  // Siteconfig is the content of docusaurus.config.js
  const { themeConfig } = siteConfig

  if (!themeConfig.lds) {
    throw new Error(
      'You need to specify `lds` object in `themeConfig` '
      + 'with `code` field in it to use docusaurus-plugin-lds'
    )
  }
  if (!themeConfig.lds.code) {
    throw new Error(
      'You specified the `lds` object in `themeConfig`, '
      + 'but the `code` field was missing. '
    )
  }

  // const analyticsDomain = `https://${ themeConfig.lds.code }.goatcounter.com`


  // return {
  //   name: 'docusaurus-plugin-lds',
  //   injectHtmlTags: () => { // Adds additional HTLM to every page
  //     return {
  //       headTags: [
  //         {
  //           tagName: 'script',
  //           attributes: {
  //             async: true,
  //             src: '//gc.zgo.at/count.js',
  //             'data-goatcounter': `${ analyticsDomain }/count`,
  //           },
  //         },
  //       ],
  //     }
  //   },
  // }

  return {
    name: 'docusaurus-plugin-lds',
    injectHtmlTags: () => { // Adds additional HTLM to every page
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              async: true,
              type: 'module',
              src: '',
            },
          },
        ],
      }
    },
  }
}