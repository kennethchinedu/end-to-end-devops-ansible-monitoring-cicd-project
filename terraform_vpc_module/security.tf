# provider "aws" {
#   region  = "us-east-1" 
# #   access_key =  
# #   secret_key = 
# }


resource "aws_security_group" "basic_security" {
  name = "allow_http_security"
   tags = {
    Name = "allow_http_security"
  }

  ingress  {
    description = "Allow HTTPS"
    from_port        = 443
    to_port          = 443
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

  ingress  {
    description = "Allow HTTP"
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

   ingress  {
    description = "Allow SSH"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

  egress  {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}

#Control plane firewal for kubernates

resource "aws_security_group" "monitoring" {
  name = "allow_monitoring"
   tags = {
    Name = "kube_control_plane"
  }

  ingress  {
    description = "Allow node exporter"
    from_port        = 9100
    to_port          = 9100
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

  ingress  {
    description = "Allow blackbox exporter"
    from_port        = 9115
    to_port          = 9115
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

   ingress  {
    description = "Allow prometheus"
    from_port        = 9090
    to_port          = 9090
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

}
