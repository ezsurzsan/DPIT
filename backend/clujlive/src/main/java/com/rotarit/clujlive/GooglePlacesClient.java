package com.rotarit.clujlive;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;

import javax.net.ssl.HttpsURLConnection;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class GooglePlacesClient {
    public JSONObject makeRequest(String placeID) throws Exception {
        String key = "AIzaSyAh8QaruNiELa5XJDUjNchIz1tdZrYOD0A";
        URL url = new URL("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeID + "&key=" + key);
        HttpsURLConnection con = (HttpsURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        StringBuilder stringBuilder = new StringBuilder();
        String tempLine;
        while ((tempLine = in.readLine()) != null) {
            stringBuilder.append(tempLine);
        }
        JSONObject rawJSON = new JSONObject(stringBuilder.toString());
        JSONObject resultJSON = rawJSON.getJSONObject("result");
        in.close();
        con.disconnect();
        return resultJSON;
    }

    public JSONObject makeDetailsRequest(String placeID) throws Exception {
        JSONObject details = new JSONObject();
        JSONObject placeJSON = makeRequest(placeID);
        int priceLevel = placeJSON.getInt("price_level");
        float rating = placeJSON.getFloat("rating");
        details.append("rating", rating);
        details.append("price_level", priceLevel);
        return details;
    }
}