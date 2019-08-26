package com.rotarit.clujlive.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Place {
    @Id
    private Integer id;
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

    public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getLatitude() {
        return this.latitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }

    
    public float getLongitude() {
        return this.longitude;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }
}