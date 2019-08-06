package com.rotarit.clujlive.models;

public class Place {
    private String name;
    private float latitude;
    private float longitude;

    public Place() {

    }

    public Place(String name, float latitude, float longitude) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getLatitute() {
        return this.latitude;
    }

    public void setLatitute(float latitude) {
        this.latitude = latitude;
    }

    
    public float getLongitude() {
        return this.longitude;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }
}