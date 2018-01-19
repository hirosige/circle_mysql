# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"
GUEST_IP_ADDR           = "192.168.33.15"
BOX_IMAGE               = "bento/centos-7.3"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = BOX_IMAGE

  if Vagrant.has_plugin?("vagrant-cachier")
    config.cache.scope = :box
  end

  if Vagrant.has_plugin?("vagrant-vbguest")
    config.vbguest.auto_update = false
  end

  # config.vm.box_check_update = false
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.network "private_network", ip: GUEST_IP_ADDR
  # config.vm.network "public_network"

  # Vagrant bugs can't run ansible on init
  config.vm.synced_folder ".", "/arms_web", mount_options: ['dmode=777','fmode=755']
  config.vm.synced_folder ".", "/vagrant", mount_options: ['dmode=777','fmode=755']

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "1024"
  end

  # config.push.define "atlas" do |push|
  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  # end

  config.vm.provision "ansible_local" do |ansible|
    ansible.playbook = "provision/host/site.yml"
  end
end
