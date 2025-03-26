terraform {
  required_version = ">= 1.0.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
    tls = {
      source  = "hashicorp/tls"
      version = "~> 4.0"
    }
  }
}



module "server_module" {
  source = "./terraform_vpc_module/"

  
#   parameter1 = var.parameter1

   
}


# output "module_output" {
#   value = module.example_module.output_value
# }
