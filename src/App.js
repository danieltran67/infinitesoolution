import './App.css'
import { useEffect, useState } from "react";
import axios from "axios"
import MenuAppBar from "./components/menu-app-bar"

//TODO: Set page when user selects business ID, displays business details + business hours
export default function App() {
  const [repo, setRepo] = useState([])
  const [option, setOption] = useState(-1);

  useEffect(() => {
    axios.get("https://kfc19k33sc.execute-api.us-west-1.amazonaws.com/dev/api/v2/businesses")
        .then((response) => {
          setRepo(response.data.result)
        })
  }, [])

//Select option ID via drop menu
  const handleChange = id => {
    setOption(id.target.value);
  };

//Display all business ID's
  const optionElements = repo.map((item, index) => {
    return (
        <option value={index}>
          {item.business_uid}
        </option>
    )
  })

    //const getID = repo[option].business_uid;

  return (
      <div className="app">
          <MenuAppBar />
        <h3 className="dropdown-menu">
          <label htmlFor="dropdown"> Business ID: </label>
          <select name="dropdown" className="dropdown" value={option} onChange={handleChange}>
            <option value={-1}> Select ID: </option>
            {optionElements}
          </select>
        </h3>

          <p className="api">
              {option === -1 ? "" :
                  "business_uid: " + repo[option].business_uid + "\n" +
                  "business_created_at: " + repo[option].business_created_at + "\n" +
                  "business_name: " + repo[option].business_name + "\n" +
                  "business_type: " + repo[option].business_type + "\n" +
                  "business_desc: " + repo[option].business_desc + "\n" +

                  "business_association: " + repo[option].business_association + "\n" +
                  "business_contact_first_name: " + repo[option].business_contact_first_name + "\n" +
                  "business_contact_last_name: " + repo[option].business_contact_last_name + "\n" +
                  "business_phone_num: " + repo[option].business_phone_num + "\n" +
                  "business_phone_num2: " + repo[option].business_phone_num2 + "\n" +
                  "business_email: " + repo[option].business_email + "\n" +

                  "business_hours: " +
                  (repo[option].business_hours == null || repo[option].business_hours === "{}" ? repo[option].business_hours + "\n" :
                      " Monday " + JSON.parse(repo[option].business_hours).Monday[0]
                      + "-" + JSON.parse(repo[option].business_hours).Monday[1] +
                      " | Tuesday " + JSON.parse(repo[option].business_hours).Tuesday[0]
                      + "-" + JSON.parse(repo[option].business_hours).Tuesday[1] +
                      " | Wednesday " + JSON.parse(repo[option].business_hours).Wednesday[0]
                      + "-" + JSON.parse(repo[option].business_hours).Wednesday[1] +
                      " | Thursday " + JSON.parse(repo[option].business_hours).Thursday[0]
                      + "-" + JSON.parse(repo[option].business_hours).Thursday[1] +
                      " | Friday " + JSON.parse(repo[option].business_hours).Friday[0]
                      + "-" + JSON.parse(repo[option].business_hours).Friday[1] +
                      " | Saturday " + JSON.parse(repo[option].business_hours).Saturday[0]
                      + "-" + JSON.parse(repo[option].business_hours).Saturday[1] +
                      " | Sunday " + JSON.parse(repo[option].business_hours).Sunday[0]
                      + "-" + JSON.parse(repo[option].business_hours).Sunday[1] + "\n") +

                  "business_accepting_hours: " +
                  (repo[option].business_accepting_hours == null || repo[option].business_accepting_hours === "{}" ? repo[option].business_accepting_hours + "\n" :
                      " Monday " + JSON.parse(repo[option].business_accepting_hours).Monday[0]
                      + "-" + JSON.parse(repo[option].business_accepting_hours).Monday[1] +
                      " | Tuesday " + JSON.parse(repo[option].business_accepting_hours).Tuesday[0]
                      + "-" + JSON.parse(repo[option].business_accepting_hours).Tuesday[1] +
                      " | Wednesday " + JSON.parse(repo[option].business_accepting_hours).Wednesday[0]
                      + "-" + JSON.parse(repo[option].business_accepting_hours).Wednesday[1] +
                      " | Thursday " + JSON.parse(repo[option].business_accepting_hours).Thursday[0]
                      + "-" + JSON.parse(repo[option].business_accepting_hours).Thursday[1] +
                      " | Friday " + JSON.parse(repo[option].business_accepting_hours).Friday[0]
                      + "-" + JSON.parse(repo[option].business_accepting_hours).Friday[1] +
                      " | Saturday " + JSON.parse(repo[option].business_accepting_hours).Saturday[0]
                      + "-" + JSON.parse(repo[option].business_accepting_hours).Saturday[1] +
                      " | Sunday " + JSON.parse(repo[option].business_accepting_hours).Sunday[0]
                      + "-" + JSON.parse(repo[option].business_accepting_hours).Sunday[1] + "\n") +

                  "business_delivery_hours: " +
                  (repo[option].business_delivery_hours == null || repo[option].business_delivery_hours == "{}" ? repo[option].business_delivery_hours + "\n" :
                      " Monday " + JSON.parse(repo[option].business_delivery_hours).Monday[0] + "-"
                      + JSON.parse(repo[option].business_delivery_hours).Monday[1] +
                      " | Tuesday " + JSON.parse(repo[option].business_delivery_hours).Tuesday[0] + "-"
                      + JSON.parse(repo[option].business_delivery_hours).Tuesday[1] +
                      " | Wednesday " + JSON.parse(repo[option].business_delivery_hours).Wednesday[0]
                      + "-" + JSON.parse(repo[option].business_delivery_hours).Wednesday[1] +
                      " | Thursday " + JSON.parse(repo[option].business_delivery_hours).Thursday[0] + "-"
                      + JSON.parse(repo[option].business_delivery_hours).Thursday[1] +
                      " | Friday " + JSON.parse(repo[option].business_delivery_hours).Friday[0] + "-"
                      + JSON.parse(repo[option].business_delivery_hours).Friday[1] +
                      " | Saturday " + JSON.parse(repo[option].business_delivery_hours).Saturday[0] + "-"
                      + JSON.parse(repo[option].business_delivery_hours).Saturday[1] +
                      " | Sunday " + JSON.parse(repo[option].business_delivery_hours).Sunday[0] + "-"
                      + JSON.parse(repo[option].business_delivery_hours).Sunday[1] + "\n") +

                  "business_address: " + repo[option].business_address + "\n" +
                  "business_unit: " + repo[option].business_unit + "\n" +
                  "business_city: " + repo[option].business_city + "\n" +
                  "business_state: " + repo[option].business_state + "\n" +
                  "business_zip: " + repo[option].business_zip + "\n" +
                  "business_longitude: " + repo[option].business_longitude + "\n" +
                  "business_latitude: " + repo[option].business_latitude + "\n" +
                  "business_EIN: " + repo[option].business_EIN + "\n" +
                  "business_WAUBI: " + repo[option].business_WAUBI + "\n" +
                  "business_license: " + repo[option].business_license + "\n" +
                  "business_USDOT: " + repo[option].business_USDOT + "\n" +
                  "bus_notification_approval: " + repo[option].bus_notification_approval + "\n" +
                  "can_cancel: " + repo[option].can_cancel + "\n" +
                  "delivery: "  + repo[option].delivery + "\n" +
                  "reusable: " + repo[option].reusable + "\n" +
                  "business_image: " + repo[option].business_image + "\n" +
                  "business_password: " + repo[option].business_password + "\n" +
                  "bus_guid_device_id_notification: " + repo[option].bus_guid_device_id_notification + "\n" +
                  "platform_fee: " + repo[option].platform_fee + "\n" +
                  "transaction_fee: " + repo[option].transaction_fee + "\n" +
                  "revenue_sharing: " + repo[option].revenue_sharing + "\n" +
                  "profit_sharing: " + repo[option].profit_sharing + "\n" +
                  "business_links: " + repo[option].business_links + "\n" +
                  "business_status: " + repo[option].business_status + "\n"
              }
          </p>

      </div>
  )
}