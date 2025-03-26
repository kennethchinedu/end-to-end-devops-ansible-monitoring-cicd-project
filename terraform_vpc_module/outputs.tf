output "vpc_id" {
  value = aws_vpc.kubctl-vpc.id 
}

output "private_key" {
  value     = tls_private_key.kube-server-key.private_key_pem
  sensitive = true
}