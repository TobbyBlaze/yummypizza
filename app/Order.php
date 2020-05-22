<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //Table name
    protected $table = 'orders';
    //Primary Key
    public $primaryKey = 'id';
    //Timestamps
    public $timestamps = true;

    protected $fillable = [
        // 'id',
        'user_id'
        // 'good_id',
        // 'cart_id'
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function orders(){
        return $this->belongsTo('App\User');
    }

    // public function ordergoods(){
    //     return $this->belongsTo('App\Good');
    // }

    // public function carts(){
    //     return $this->hasMany('App\Order');
    // }

}
