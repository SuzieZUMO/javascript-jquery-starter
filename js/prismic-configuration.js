var Configuration = {

  // -- API endpoint
  apiEndpoint: 'https://lesbonneschoses.prismic.io/api',

  // -- OAuth
  clientId: 'UgOwo9_mqQEGd6gl',
  clientSecret: '3e88a047c8cdc13d0042a7a7e612db9e',

  // -- Links resolution rules
  linkResolver: function(ctx, doc) {
    return 'detail.html?id=' + doc.id + '&slug=' + doc.slug + ctx.maybeRefParam;
  }

}