package com.nutriometer.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name = "FOODS")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)

// this class represents a food/ingredient
public class Food extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String name;
    @Column
    private float amount;
    @Column
    private float calorie;
    @Column
    private float carbohydrate;
    @Column
    private float protein;
    @Column
    private float fat;

}
