package com.rotarit.clujlive;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;

import javax.net.ssl.HttpsURLConnection;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class GooglePlacesClient {
    // private static final String GOOGLE_API_KEY = "AIzaSyDve3P1vFG6yiaSqlIyGC_Zr1wIeRov56Q";

    public JSONObject makeRequest(String placeID)  throws Exception {
        // TODO: add id prop
        String key = "AIzaSyDve3P1vFG6yiaSqlIyGC_Zr1wIeRov56Q";
        URL url = new URL("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeID + "&key=" + key);
        HttpsURLConnection con = (HttpsURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        StringBuilder stringBuilder = new StringBuilder();
        String tempLine;
        while((tempLine = in.readLine()) != null) {
            stringBuilder.append(tempLine);
        }
        JSONObject rawJSON = new JSONObject(stringBuilder.toString());
        JSONObject resultJSON = rawJSON.getJSONObject("result");
        // System.out.println(resultJSON);
        in.close();
        con.disconnect();
        return resultJSON;
    }

}