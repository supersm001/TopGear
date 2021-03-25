import { AxiosInstance, AxiosInstance2 } from './Axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export async function SendOTP(contact) {
  try {
    var res = await AxiosInstance.post('GenerateUserOtp?contact=' + contact);

    if (res.data == 'success') {
      console.log(res.data);
      return 'success';
    }
    else
      return 'error';
  } catch (e) {
    //console.log("Send OTP Error : ", e)
    return e;
  }
}




export async function CheckOTP(contact, otp) {
  try {
    var res = await AxiosInstance.post('CheckUserOtp?contact=' + contact + '&otp=' + otp);

    //  console.log(res.data);

    // console.log("Send OTP Success : ", res.data[0].user_contact)
    if (res.data != "error") {
      const Data = res.data[0];
      try {
        await AsyncStorage.setItem('id', Data.id)



        await AsyncStorage.setItem('name', Data.user_firstname)
        await AsyncStorage.setItem('email', Data.user_email)
        await AsyncStorage.setItem('contact', Data.user_contact)

      } catch (e) {
        console.log(e)
      }

      // console.log("run");
      return 'success';
    }
    else
      return 'error';
  } catch (e) {
    //console.log("Send OTP Error : ", e)
    return e;
  }
}



export async function Registration(sponsor_id, sponsor_name, user_firstname, user_fathername, user_email, user_age, user_address, user_city, user_state, user_contact,) {
  try {
    var res = await AxiosInstance.post('Registration?sponsor_id=' + sponsor_id + '&sponsor_name=' + sponsor_name + '&user_firstname=' + user_firstname + '&user_fathername=' + user_fathername + '&user_email=' + user_email + '&user_contact=' + user_contact + '&user_age=' + user_age + '&user_address=' + user_address + '&user_city=' + user_city + '&user_state=' + user_state);
    console.log("Res : ", res.data)
    if (res.data == 'success') {
      // Set TOKEN ON SESSION

      return 'success';
    }
    else
      return 'error';
  } catch (e) {
    return e;
  }
}



export async function FetchSponsorName(sponsor_id) {
  try {
    var res = await AxiosInstance.post('FetchSponsorName?SponsorId=' + sponsor_id);

    const sponsor = res.data[0].sponsor_name;

    //console.log(sponsor);
    if (sponsor.length >= 0) {
      // Set TOKEN ON SESSION

      return sponsor;
    }
    else
      return 'error';
  } catch (e) {
    return e;
  }
}




export async function fetchlastBannerDetails() {
  try {
    var res = await AxiosInstance.post('fetchlastBannerDetails');
    const img = res.data[0].image;
    // console.log(img);



    if (img == res.data[0].image) {
      // Set TOKEN ON SESSION

      return img;
    }
    else
      return 'error';
  } catch (e) {
    return e;
  }
}





export async function fetchdataOfLatestAdvertisement() {
  try {
    var res = await AxiosInstance.post('fetchdataOfLatestAdvertisement');
    const AdInfo = res.data[0];
    // console.log(img);



    if (AdInfo == res.data[0]) {
      // Set TOKEN ON SESSION

      return AdInfo;
    }
    else
      return 'error';
  } catch (e) {
    return e;
  }
}




export async function lastAnnouncementApi() {
  try {
    var res = await AxiosInstance.post('lastAnnouncementApi');
    const AdInfo = res.data[0];
    // console.log(img);



    if (AdInfo == res.data[0]) {
      // Set TOKEN ON SESSION

      return AdInfo;
    }
    else
      return 'error';
  } catch (e) {
    return e;
  }
}




export async function fetchUserDetails(contact) {
  try {
    // console.log(contact);
    const res = await AxiosInstance.post('getMemberDetails?contact=' + contact);
    const Data = res.data[0];
    // console.log(Data);



    if (Data != "error") {
      // Set TOKEN ON SESSION
      // console.log(details);

      // console.log(details);
      return Data;
    }
    else
      return 'error';
  } catch (e) {
    return e;
  }
}





export async function updateUserDetails(user_firstname, user_fathername, user_email, user_contact,
  user_age, user_address, user_city, user_state) {
  try {

    var res = await AxiosInstance.post('updateUserDetails?user_firstname=' + user_firstname + '&user_fathername=' + user_fathername + '&user_email=' + user_email + '&user_contact=' + user_contact + '&user_age=' + user_age + '&user_address=' + user_address + '&city=' + user_city + '&state=' + user_state);
    // console.log(res)
    if (res != 'error') {

      return res;
    }
    else
      return 'error';
  } catch (e) {
    return e;
  }
}


export async function getOffersFromApi() {
  try {
    var res = await AxiosInstance2.get();
    const Offers = res.data;
    // console.log(img);



    if (Offers == res.data) {
      // Set TOKEN ON SESSION
      console.log(Offers.offers[0].amount);
      console.log(Offers.offers[0].description);
      console.log(Offers.offers[0].link);
      console.log(Offers.offers[0].mobile_app_icon_url);
      console.log(Offers.offers[0].mobile_app_minimum_version);
      console.log(Offers.offers[0].payout_currency);
      console.log(Offers.offers[0].title);
      return Offers.offers;
    }
    else
      return 'error';
  } catch (e) {
    return e;
  }
}