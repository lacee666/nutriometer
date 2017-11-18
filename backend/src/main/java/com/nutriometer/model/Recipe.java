package com.nutriometer.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "RECIPE")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Recipe extends BaseEntity{

    @Column(nullable = false, unique = false)
    public String name;

    @Column(nullable = false, unique = false)
    public String details;

    @JoinColumn
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, targetEntity = Food.class)
    public List<Food> foods;
}
