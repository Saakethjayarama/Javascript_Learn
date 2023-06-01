<?php
  require_once 'Contact.php';
  require_once 'ContactDao.php';
  require_once 'ContactDaoImpl.php';

  $cdi = new ContactDaoImpl();
  $cdi->addContact(new Contact(null, 'Saaketh', 'saakethaj@gmail.com', '9663971485', 'Hey there'), 'institution');
  
?>