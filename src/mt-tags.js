import MTDataAPI from './mt-data-api.min.js'
import ObjectAssign from 'object-assign'

const MTTags = () => {
  this.baseUrl = 'https://app.movabletype.jp/mt/mt-data-api.cgi',
  this.clientId = 'MTTags'

  this.siteId = 3
  this.params = {
    fields: 'excerpt,permalink,tags,title',
    searchFields: 'title',
    sortBy: 'title',
    sortOrder: 'ascend'
  }

  this.client = new MTDataAPI({
    baseUrl: this.baseUrl,
    clientId: this.clientId
  })
}

MTTags.prototype.search = (searchText, callback) => {
  var params
  if (searchText) {
    params = ObjectAssign({ search: searchText }, this.params)
  } else {
    params = this.params
  }
  this.client.listEntries(this.siteId, params, callback)
}

export default new MTTags()
