<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;
use lluminate\Database\Eloquent\Collection\visits;

use App\Good;
use App\Cart;
use App\Review;
use App\User;
use App\Order;
use App\Notifications\NewReview;
use App\Notifications\NewCart;
use Auth;
use DB;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        // $this->middleware('cors');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = User::find(auth::user()->id);

        $orders = Order::orderBy('orders.updated_at', 'desc')
        ->where('orders.user_id', $user->id)
        ->paginate(20);

        $data = [

            'user' => $user,
            'orders'=>$orders,
            // 'reviews' => $reviews,

        ];

        return response()->json($data,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $cart = Cart::find($id);

        $order = new Order;
        $order->user_id = auth()->user()->id;
        // $order->cart_id = $cart->id;
        
        $order->save();

        // return redirect('/')->with('success', 'cart created successfully');
        return response()->json($order, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
