variable "instance_type" {
  type = string
  default = "value"
}

variable "ami" {
  type = string
  default = "value"
}

variable "vpc_cidr" {
  default = "10.0.0.0/16" #Include your cidr block here
}


variable "subnet1_cidr" {
  default = "10.0.1.0/24"
}

variable "kubekey_pair" {
  type = string
  default = "devops_pair" 
}

variable "servers_ami" {
  type = string
  default = "ami-04b4f1a9cf54c11d0"
}

# variable "control_node_instance_type" {
#   type = string
#   default = "t2.medium"
# }

variable "worker_node_instance_type" {
  type = string
  default = "t2.micro"
}

# variable "number_of_worker_nodes" {
#   type = number
#   default = 2
# }