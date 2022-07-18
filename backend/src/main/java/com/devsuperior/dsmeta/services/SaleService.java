package com.devsuperior.dsmeta.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.reposiories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;

	@GetMapping
	public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {
		
		LocalDate min = LocalDate.parse(minDate);
		LocalDate max = LocalDate.parse(maxDate);
		
		return repository.findAll(pageable);

	}

}
