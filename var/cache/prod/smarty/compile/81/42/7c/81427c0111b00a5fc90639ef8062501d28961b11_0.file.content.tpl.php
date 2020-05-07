<?php
/* Smarty version 3.1.33, created on 2020-04-23 03:03:06
  from 'C:\xampp\htdocs\prestashop\admin612ygdw6a\themes\default\template\content.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_5ea0e94ae6eeb0_14476197',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '81427c0111b00a5fc90639ef8062501d28961b11' => 
    array (
      0 => 'C:\\xampp\\htdocs\\prestashop\\admin612ygdw6a\\themes\\default\\template\\content.tpl',
      1 => 1583241249,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5ea0e94ae6eeb0_14476197 (Smarty_Internal_Template $_smarty_tpl) {
?><div id="ajax_confirmation" class="alert alert-success hide"></div>
<div id="ajaxBox" style="display:none"></div>


<div class="row">
	<div class="col-lg-12">
		<?php if (isset($_smarty_tpl->tpl_vars['content']->value)) {?>
			<?php echo $_smarty_tpl->tpl_vars['content']->value;?>

		<?php }?>
	</div>
</div>
<?php }
}
