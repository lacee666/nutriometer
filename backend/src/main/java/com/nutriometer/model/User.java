package com.nutriometer.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "USERS")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class User extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @JoinColumn
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, targetEntity = Diary.class)
    public List<Diary> diary;

    @JoinColumn
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, targetEntity = Recipe.class)
    public List<Recipe> recipes;



    @Column(nullable = false, unique = true)
    @Enumerated(EnumType.STRING)
    private Role role;

    public enum Role {
        GUEST, USER, ADMIN
    }

}