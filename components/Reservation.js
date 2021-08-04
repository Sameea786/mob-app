import React, { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { getEmptyStation } from "../services/stations";

export const Reservation =()=>{
    let authLink = "eyJraWQiOiI2cjIzQ2FTeTF4cFdUUFBxYVRtX01Vc2RKZGo1RWlDTnRtME4yVTAxNTdFIiwidmVyIjoiMS4wIiwiemlwIjoiRGVmbGF0ZSIsInNlciI6IjEuMCJ9.T3SdTJdjUmvMGCj6i--3ohu7cnN7AT5ElsCmGMD_qLveRlXpwGqbGwFcGc1zzYrL_TAPVxI8OdZZNyU3VTpvZKf3nfXBexnMZWouDd1uMWEuDuRx75UXBktdZBfRJy2KQI5McuZP4pBmpxXOGG4vFIoVBK7BZnIrGhSeQxfpimgrOBYUbAuIRB3FiFpH7laZQi8xVSyiTJpCzCoUJlv19l8VO8BjS2IkHo34O3nIceubXFM1R0wySt15uw7Iaa7RA12XZVqjy87PaqUTsHJNjAm3MeEuAcFanUVcjG2HX0BI3qaZ5JsDe6zNy-GvHDnjIZ9uS2Uzjy6TSZuSEx541Q.1LTAtPghG4PgQVr6.B_xNYxe7TYlxkPWNzB3GhfTKfiwjf4psJQljuyzHSh0_1XY2BvnBHuCV6lk6Fo3Vp8rdzEsgaXvqHsn0ILwSgR0UaOP_Xl6MiZZyD5GnW5_UGiMEBqnn529h3dNlW-SD9ODIHRX4eOW_y7mob01xOcLxIl5DWe0xoV3HFlSQcASLi14I6EF39UvhZucpGe8Gqlz1fscU0lAQIoEIfiZ-xwZj2ssEI-EbK3hBEYKn_SP_M8bmY0pK5yxsonhuVmM3aW5AEpFqqpH8rfSAVhbm-WHT9WbdOTTxjrVwuxvBmvr2ueHZyNQYMrVTTDtVJNEuDUoHHEEavWBE6CNomiqqpm6YPK11ShkuR1ehxJjBqeQncSnpGoyzbjuBhriykXss1bXrZVvGsHYRaGcaHDTHcrAo2MbrsiYxz5vFgbmscg2AzZK5GHWXXVimTVfnp_6wRXwmh-2T7cYcYhYAHIrtX0TaiRwyOuN5fjxsV8sm-kIpXKzj7uW74pgtKhTtYE6_m6kOk5f-gCVE0bxV0ARi25Zww1D6OY4E5FEfCa6pa1GPNZhA51Ep1jFgA9j5HQ9mM12O_gl0mZK1NZUatvYwUNxL3CtVy8SpLfbiFHBWPNWPkAyRR8dun0WGqyZpN2hFfMVgMDaQ69bNcu99EczFHsAztK0jXD_78c7cc3LiIAlw1Fzz82gP1p4IQCkgGw5Rl8ecyOvbnQHoyLI0mBSwvjKg-e3LIqIG2haueXuTvyaG81X0-2ZOhz17Smy0Dtuk8e0JaI_vsGq8qsgTud7NJFS5tDtbcPkUqyrQuTSGws8zPU-ivQtqkV6rIkXkvUxjNqIbbkJGl6HR.2rLDHKc8tsqnn_kgsISgBw"
    
    getEmptyStation({"authorization_code": authLink})
    .then(data => {
      console.log(`The data: ${data}`);
      
      if(typeof data !== "string"){
        saveClientToken(data["client_token"]);
        setClientToken(data["client_token"]);
        setVehicleID(data["vehicles"]["0"]["vehicle_id"]);
        setDistanceToEmpty(data["vehicles"]["0"]["distance_to_empty"]);
        storeNotifData(data["client_token"], {
          [data["vehicles"]["0"]["vehicle_id"]]: notifData
        });
      }else {
        console.log("Error");
        console.log(data)
        // setIsDisabled(false);
        // setStatusMessage("There was an issue with authorization. Please try again.");
      }
  })
  .catch((error) => {
    console.error("Uh oh, rejected authorization promise!");
    console.error(error);
    setIsDisabled(false);
    setStatusMessage("There was an issue with authorization. Please try again.");
  });

    return ("Working")
}