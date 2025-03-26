# provider "aws" {
#   region  = "us-east-1" 
# #   access_key =  
# #   secret_key = 
# }


resource "aws_security_group" "kube_security" {
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

resource "aws_security_group" "kube_control_plane" {
  name = "kube_control_plane"
   tags = {
    Name = "kube_control_plane"
  }

  ingress  {
    description = "Allow kubernates api server"
    from_port        = 6443
    to_port          = 6443
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

  ingress  {
    description = "Allow kubelet api"
    from_port        = 10250
    to_port          = 10250
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

   ingress  {
    description = "Allow kube scheduler"
    from_port        = 10259
    to_port          = 10259
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

  ingress  {
    description = "Allow kube controlmanager"
    from_port        = 10257
    to_port          = 10257
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

  ingress  {
    description = "Etcd sever"
    from_port        = 2379
    to_port          = 2380
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

}

#Worker nodes 
resource "aws_security_group" "kube_worker_nodes" {
  name = "kube_worker_nodes"
   tags = {
    Name = "kube_worker_nodes"
  }

  ingress  {
    description = "Kublet api"
    from_port        = 10250
    to_port          = 10250
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

  ingress  {
    description = "Nodeport service"
    from_port        = 30000
    to_port          = 32767
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }
}

#Flannel UDP port

resource "aws_security_group" "flannel_udp" {

  name = "flannel_udp"
   tags = {
    Name = "flannel_udp_ports"
  }
  
   ingress  {
    description = "Kublet api"
    from_port        = 8285
    to_port          = 8285
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

  ingress  {
    description = "Nodeport service"
    from_port        = 8472
    to_port          = 8472
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }
} 