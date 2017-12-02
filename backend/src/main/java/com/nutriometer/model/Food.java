package com.nutriometer.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "FOODS")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)

// this class represents a food/ingredient
public class Food extends BaseEntity {
    @JoinColumn
    @ManyToMany(cascade = CascadeType.MERGE, targetEntity = Diary.class)
    private List<Diary> diary;
    @Column(nullable = false, unique = false)
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
