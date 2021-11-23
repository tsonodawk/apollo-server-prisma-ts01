const { RESTDataSource } = require('apollo-datasource-rest')
const hubspot = require('@hubspot/api-client')
const request = require('request')

class HubspotAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL =
      'https://api.hubapi.com/integrations/v1/limit/daily?hapikey=demo'

    // TODO: envから取得
    this.hubspotClient = new hubspot.Client({
      apiKey: '636b6fc6-f890-49c8-a6f5-dc7fdfad5876',
    })
  }

  async getHubspotAllContacts() {
    // const hubspotClient = new hubspot.Client({
    //   apiKey: '636b6fc6-f890-49c8-a6f5-dc7fdfad5876',
    // })
    const limit = 10
    const after = undefined
    const properties = undefined
    const associations = undefined
    const archived = false

    try {
      const apiResponse =
        await this.hubspotClient.crm.contacts.basicApi.getPage(
          limit,
          after,
          properties,
          associations,
          archived
        )
      // console.log(JSON.stringify(apiResponse.body, null, 2))

      const allContacts = apiResponse.body.results.map((item) =>
        this.contactReducer(item)
      )

      return allContacts ? allContacts : []
    } catch (e) {
      e.message === 'HTTP request failed'
        ? console.error(JSON.stringify(e.response, null, 2))
        : console.error(e)
    }
  }

  /**
   *
   * @param {*} email
   */
  async getHubspotContactByEmail(email) {
    const filter = {
      propertyName: 'email',
      operator: 'EQ',
      value: email,
    }
    const filterGroup = { filters: [filter] }
    const sort = JSON.stringify({
      propertyName: 'createdate',
      direction: 'DESCENDING',
    })
    // const query = 'test'
    const properties = ['id', 'email', 'firstname', 'lastname', 'user_type']
    const limit = 100
    const after = 0

    const publicObjectSearchRequest = {
      filterGroups: [filterGroup],
      sorts: [sort],
      // query,
      properties,
      limit,
      after,
    }

    const result = await this.hubspotClient.crm.contacts.searchApi.doSearch(
      publicObjectSearchRequest
    )
    // console.log(JSON.stringify(result.body))

    const contact = this.contactReducer(result.body.results[0])

    return contact
  }

  async updateHubspotContact(updateId, phone) {
    const properties = {
      phone: phone,
    }
    const SimplePublicObjectInput = { properties }
    const contactId = updateId
    // const idProperty = undefined

    try {
      const apiResponse = await this.hubspotClient.crm.contacts.basicApi.update(
        contactId,
        // idProperty,
        SimplePublicObjectInput
      )
      console.log(JSON.stringify(apiResponse.body, null, 2))

      const contact = this.contactReducer(apiResponse.body)
      return contact
    } catch (e) {
      e.message === 'HTTP request failed'
        ? console.error(JSON.stringify(e.response, null, 2))
        : console.error(e)
    }
  }

  /**
   *
   * @param {*} contact
   * @returns
   */
  contactReducer(contact) {
    return {
      id: contact.id,
      email: contact.properties.email,
      firstname: contact.properties.firstname,
      lastname: contact.properties.lastname,
      userType: contact.properties.user_type,
      phone: contact.properties.phone,
    }
  }
}

module.exports = HubspotAPI
