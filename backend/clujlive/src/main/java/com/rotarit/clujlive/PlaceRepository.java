package com.rotarit.clujlive;

import com.rotarit.clujlive.models.Place;

import org.springframework.data.jpa.repository.JpaRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface PlaceRepository extends JpaRepository<Place, Integer> {

}