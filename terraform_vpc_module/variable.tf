variable "instance_type" {
  type = string
  default = "t2.micro" 
}

variable "ami" {
  type = string
  default = "ami-04b4f1a9cf54c11d0"
}

variable "vpc_cidr" {
  type = string
  default = "10.0.0.0/16" #Include your cidr block here
}


variable "subnet1_cidr" {
  type = string
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
  default = "t2.medium"
}

# variable "number_of_worker_nodes" {
#   type = number
#   default = 2
# }