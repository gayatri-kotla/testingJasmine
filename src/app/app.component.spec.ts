
import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component"
import { DataService } from "../service/data.service";
import{HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
import { mockProducts } from "src/assets/products";

describe("appcomponent",()=>{
  let app: AppComponent;
  let testingController:HttpTestingController;

  beforeEach(()=>{
    console.log("before each is called");

    TestBed.configureTestingModule({
      providers:[DataService],
      imports:[HttpClientTestingModule],
      declarations:[AppComponent],
    })

   const fixture = TestBed.createComponent(AppComponent)
    app = fixture.componentInstance;
    testingController= TestBed.inject(HttpTestingController)
  })

  it('should be created', () => {
    expect(app).toBeTruthy(); 
  });

  it("should multiply two numbers",()=>{
    
      const result = app.multiply(3,5);
      console.log("multiplication result ",result)
      expect(result).toBe(15);
  });
   it("should add two numbers",()=>{
   
      const result = app.add(3,5);
      console.log("addition result ",result)
      expect(result).toBe(8);
  });

  it('should get all users',()=>{

    app.getProducts().subscribe((products)=>{
      expect(products).toBeTruthy();
      const length = products.length;
      console.log("Products Length",length);
      // console.log("Products.....", JSON.stringify(mockProducts))
      expect(products.length).toBe(length);
    })

    const req = testingController.expectOne('https://fakestoreapi.com/products');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
    testingController.verify();
  })


  it('should get user by id',()=>{
    app.getProductById(1).subscribe((product)=>{
      console.log("getting product by id",product)
      expect(product).toBeTruthy();
      
    })

    const req = testingController.expectOne('https://fakestoreapi.com/products/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts[1]);
    testingController.verify();
  });

  // it("should call mysharedFunction", ()=>{
  //   // const sharedFn = new DataService();
  //   const sharedFn  = jasmine.createSpyObj("DataService",["mySharedFunction"]);
  //   // spyOn(sharedFn,"mySharedFunction").and.callThrough();
  //   const app = new AppComponent(sharedFn);
  //   const result = app.multiply(3,5);
  //   expect(sharedFn.mySharedFunction).toHaveBeenCalled();
  // })

 
})