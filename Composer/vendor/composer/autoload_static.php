<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitbe2e28ab1f5494d3d08d02ada5e9a78a
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitbe2e28ab1f5494d3d08d02ada5e9a78a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitbe2e28ab1f5494d3d08d02ada5e9a78a::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
