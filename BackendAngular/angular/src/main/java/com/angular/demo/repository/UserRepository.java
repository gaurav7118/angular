package com.angular.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.angular.demo.entities.User;;
@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}