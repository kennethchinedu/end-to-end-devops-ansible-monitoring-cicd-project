

#Using  tls to create keys
resource "tls_private_key" "kube-server-key" {
  algorithm = "RSA"
  rsa_bits  = 4096
 
   #Saving the public key in my machine
   provisioner "local-exec" {
      command = "echo '${self.public_key_pem}' > ./pubkey.pem"
   }
}
resource "aws_key_pair" "server_pair" {
  key_name = var.kubekey_pair
  public_key = tls_private_key.kube-server-key.public_key_openssh 

  #saving the private key in my machine
  provisioner "local-exec" {
      command = "echo '${tls_private_key.kube-server-key.private_key_pem}' > ./private_key.pem"
   }
}


#creating control node server
resource "aws_instance" "control_node" {
  ami           = var.servers_ami
  instance_type = var.control_node_instance_type
  key_name = aws_key_pair.server_pair.key_name
  associate_public_ip_address = true 
  security_groups = [
   aws_security_group.kube_security.name,
   aws_security_group.kube_control_plane.name, 
   aws_security_group.flannel_udp.name
  ]

  root_block_device {
    volume_size = 14 
    volume_type = "gp2"

  }

  tags = {
    Name = "control_node_server"
  }

  provisioner "local-exec" {
     command = "echo 'master ${self.public_ip}'  >> ./ansible/hosts" 
  }
}

#Creating the worker nodes
resource "aws_instance" "workder-node" {
  ami = var.servers_ami
  instance_type = var.worker_node_instance_type
  count = var.number_of_worker_nodes
  key_name = aws_key_pair.server_pair.key_name 
  associate_public_ip_address = true 
  
  security_groups = [
   aws_security_group.kube_security.name,
   aws_security_group.kube_worker_nodes.name, 
   aws_security_group.flannel_udp.name
  ]

  tags = {
    Name = "kube_worker_nodes"
  }

  provisioner "local-exec" {
    command = "echo 'worker-${count.index} ${self.public_ip}' >> ./ansible/hosts.txt"
  }
}


