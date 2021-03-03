-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT 
	Product.Id,
	Product.ProductName,
	Category."CategoryName"
FROM "Product"
JOIN "Category" on Product.CategoryId = Category."Id";

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT 
	"Order"."Id" OrderID,
	Shipper."CompanyName"
FROM "Order"
JOIN "Shipper" on "Order"."ShipVia" = Shipper."Id"
WHERE "Order"."OrderDate" < '2012-08-09'
ORDER BY "Order"."OrderDate";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT
	OrderDetail."OrderId",
	Product."ProductName",
	OrderDetail."Quantity"
FROM OrderDetail
JOIN Product ON Product."Id" = OrderDetail."ProductId"
WHERE OrderDetail."OrderId" = 10251
ORDER BY Product."ProductName";

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT
	"Order"."Id" "Order ID",
	Customer."CompanyName" "Customer's Company Name",
	Employee."LastName" "Employee's Last Name"
FROM "Order"
JOIN "Customer" ON Customer."Id" = "Order"."CustomerId" 
JOIN "Employee" ON Employee."Id" = "Order"."EmployeeId";