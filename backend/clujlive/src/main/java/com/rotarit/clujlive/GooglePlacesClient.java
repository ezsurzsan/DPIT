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

    public JSONObject makeRequest()  throws Exception {
        URL url = new URL(
                "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJu-gzUZ0OSUcRBeJI7iWn1ws&key=AIzaSyDve3P1vFG6yiaSqlIyGC_Zr1wIeRov56Q");
        HttpsURLConnection con = (HttpsURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuilder stringBuilder = new StringBuilder();
        StringBuffer content = new StringBuffer();
        // while ((inputLine = in.readLine()) != null) {
        //     content.append(inputLine);
        // }
        String b;
        while((b = in.readLine()) != null) {
            stringBuilder.append(b);
        }
        JSONObject rawJSON = new JSONObject(stringBuilder.toString());
        JSONObject resultJSON = rawJSON.getJSONObject("result");
        // resultJSON.get
        // System.out.println(new JSONObject(content.toString()));
        System.out.println(rawJSON);
        // new GooglePlace(result.getString(rating));
        in.close();
        return resultJSON;
    }

}