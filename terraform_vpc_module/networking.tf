provider "aws" {
  region  = "us-east-1" 
#   access_key =  
#   secret_key = 
}


resource "aws_vpc" "kubctl-vpc" {
  cidr_block = var.vpc_cidr
  enable_dns_hostnames = true 

  tags = {
    name = "kube_vpc"
  }
}
#Creating Subnet
resource "aws_subnet" "subnet1" {
  vpc_id     = aws_vpc.kubctl-vpc.id 
  cidr_block = var.subnet1_cidr
  map_public_ip_on_launch = true 

  tags = {
    Name = "Subenet1_subnet"
  }
}

#Creating internet gateway
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.kubctl-vpc.id

  tags = {
    Name = "kube_igw"
  }
}

#creating a route table 
resource "aws_route_table" "kube_route_table" {
  vpc_id = aws_vpc.kubctl-vpc.id  

   route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

   tags = {
    Name = "kube_route_table"
  }

} 

#Associating route table to  subnet 
resource "aws_route_table_association" "subnet1" {
  subnet_id      = aws_subnet.subnet1.id
  route_table_id = aws_route_table.kube_route_table.id
}
