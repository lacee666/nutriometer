package com.nutriometer.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name = "FOOD")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
// this class represents a food, float value/100g
public class Food extends BaseEntity {

    //name
    @Column(nullable = false, unique = true)
    private String foodName;

    //basic stuff
    @Column
    private float water;
    @Column
    private float carbohydrates;
    @Column
    private float energy;
    @Column
    private float calories;
    @Column
    private float fiber;

    //protein
    @Column
    private float protein;

    //fats
    @Column
    private float fat;
    @Column
    private float saturatedFat;
    @Column
    private float monounsaturatedFat;
    @Column
    private float polyunsaturatedFat;
    @Column
    //
    private float cholesterol;
    //vitamins
    @Column
    private float vitaminA;
    @Column
    private float vitaminB6;
    @Column
    private float vitaminB12;
    @Column
    private float vitaminC;
    @Column
    private float vitaminD;
    @Column
    private float vitaminE;
    @Column
    private float vitaminK;

    //minerals
    @Column
    private float calcium;
    @Column
    private float iron;
    @Column
    private float magnesium;
    @Column
    private float potassium;
    @Column
    private float sodium;
    @Column
    private float zinc;
    @Column
    private float copper;
}
