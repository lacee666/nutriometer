package com.nutriometer.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "RECIPE")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Recipe extends BaseEntity{
    /*
    @JoinColumn
    @ManyToOne(targetEntity = User.class)
    private User user;
    */
    @Column
    public String username;
    @Column(nullable = false)
    public String name;

    // comment length is 2048
    @Column(nullable = false, length = 2048)
    public String details;
    /*
    @Column(nullable = false)
    private Timestamp timestamp;

    @JoinColumn
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, targetEntity = Food.class)
    public List<Food> foods;
    */
}
