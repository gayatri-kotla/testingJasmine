import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { response } from 'express';
import { mockProducts } from 'src/assets/products';

describe('DataService', () => {
  let service: DataService;
  let httpMock:HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should delete user by id',()=>{
    service.deleteUserById(1).subscribe((user)=>{
    
    })
    const req = httpMock.expectOne("https://fakestoreapi.com/products/1");
    expect(req.request.method).toBe('DELETE');
    req.flush(mockProducts[1]);
   
    httpMock.verify();
  })
});
