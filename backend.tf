#We will be storing our statefile in aws s3 for statelock
terraform {
  backend "s3" {
    bucket = "terraform-state-file-anams"
    key    = "ansible-project1/terraform.tfstate"
    region = "us-east-1"
  }
}