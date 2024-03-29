package com.medilab.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="Appointment")
@Data
public class AppointmentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String patientName;
    private String doctorName;
    private String testName;
    private String appointmentDate;
    private String appointmentTime;


}
