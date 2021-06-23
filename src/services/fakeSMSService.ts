import type { ID } from "@lolopinto/ent";

class FakeSMSService {
  sendSMS(toUserID: ID, msg: String) {
    console.log(`Sending SMS to user ${toUserID} with contents '${msg}'`)
  }
}

const fakeSMSService = new FakeSMSService();

export { fakeSMSService }