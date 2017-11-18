package com.nutriometer.model;

import lombok.Data;
import javax.persistence.*;

@Data
@MappedSuperclass
public class BaseEntity {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;

    @Version
    private int version;
}
