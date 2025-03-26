# resource "ansible_host" "control_plane_host" {
  
#   depends_on = [ 
#    aws_instance.control_node
#    ]

#   name = "control_plane"
#   groups = ["master"]
#   variables = {
#    ansible_user = "ubuntu"
#    ansible_host = aws_instance.control_node.public_ip 
#    ansible_ssh_private_key_file = "/Users/kennethchinedu/Desktop/Devops/Learn/ansible-project/private_key.pem"

#   }
# }