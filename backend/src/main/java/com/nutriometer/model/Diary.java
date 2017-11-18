package com.nutriometer.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Diary")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Diary extends BaseEntity{
    @Column
    public String name;

    @JoinColumn
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, targetEntity = Food.class)
    public List<Food> foods;
}
