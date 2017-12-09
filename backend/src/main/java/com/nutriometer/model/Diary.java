package com.nutriometer.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "Diary")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Diary extends BaseEntity{

    @Column(nullable = false)
    private String date;

    @Column
    private String username;

    @JoinColumn
    @ManyToMany(cascade = CascadeType.MERGE, targetEntity = Food.class)
    //@ElementCollection
    //@Column(name = "USER_FOOD")
    public List<Food> foods;
}
