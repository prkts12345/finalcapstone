<?php

namespace App\Http\Controllers\API;

use App\Models\Flight;
use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FlightController extends Controller
{
    public function index()
    {
        $book = Flight::all();
        return response()->json(['status' => 200, "flights" => $book]);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => "required",
            "email" => "required",
            "phone" => "required",
            "origin" => "required",
            "destination" => "required",
            "solutions" => "required",
            "aircraft" => "required",
            "time" => "required",
            "departureDate" => "required",
            "numPassenger" => "required",
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => 422, "validate_err" => $validator->errors()]);
        } else {
            $book = new Flight();
            $book->name = $request->input('name');
            $book->email = $request->input('email');
            $book->phone = $request->input('phone');
            $book->origin = $request->input('origin');
            $book->destination = $request->input('destination');
            $book->solutions = $request->input('solutions');
            $book->aircraft = $request->input('aircraft');
            $book->time = $request->input('time');
            $book->departureDate = $request->input('departureDate');
            $book->numPassenger = $request->input('numPassenger');
            $book->save();
            return response()->json(['status' => 200, 'message' => 'Successfully Booked']);
        }
    }

    public function edit($id)
    {
        $book = Flight::find($id);
        if ($id) {
            return response()->json(['status' => 200, "book" => $book]);
        } else {
            return response()->json(['status' => 404, "message" => 'No ID Found!']);
        }
    }

    public function destroy($id)
    {
        $book = Flight::find($id);
        if ($book) {
            $book->delete();
            return response()->json(['status' => 200, "message" => 'Flight Deleted Successfully!']);
        } else {
            return response()->json(['status' => 404, "message" => 'No Email Found!']);
        }
    }

    public function update(Request $request, $id)
    { {
            $validator = Validator::make($request->all(), [
                "name" => "required",
                "email" => "required",
                "phone" => "required",
                "origin" => "required",
                "destination" => "required",
                "solutions" => "required",
                "aircraft" => "required",
                "time" => "required",
                "departureDate" => "required",
                "numPassenger" => "required",
            ]);
            if ($validator->fails()) {
                return response()->json(['status' => 422, "validationErrors" => $validator->errors()]);
            } else {
                $book = Flight::find($id);
                if ($book) {
                    $book->name = $request->input('name');
                    $book->email = $request->input('email');
                    $book->phone = $request->input('phone');
                    $book->origin = $request->input('origin');
                    $book->destination = $request->input('destination');
                    $book->solutions = $request->input('solutions');
                    $book->aircraft = $request->input('aircraft');
                    $book->time = $request->input('time');
                    $book->departureDate = $request->input('departureDate');
                    $book->numPassenger = $request->input('numPassenger');
                    $book->update();
                    return response()->json(['status' => 200, "message" => 'Passenger Info Updated Successfully!']);
                } else {
                    return response()->json(['status' => 404, "message" => 'No ID Found!!!']);
                }
            }
        }
    }
}
