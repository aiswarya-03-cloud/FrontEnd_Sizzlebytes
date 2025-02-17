import React, { useState, useEffect } from "react";
import { Box, Button, Card, CardContent, Typography, IconButton, TextField } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/axiosinstance";
import toast, { Toaster } from "react-hot-toast";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [address, setAddress] = useState("");
  const [isAddressSaved, setIsAddressSaved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axiosInstance.get("/cart");
      setCartItems(response.data.cartItems);
      calculateTotal(response.data.cartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const updateQuantity = async (itemId, change) => {
    try {
      const response = await axiosInstance.post("/cart/update", { itemId, change });
      setCartItems(response.data.cartItems);
      calculateTotal(response.data.cartItems);
    } catch (error) {
      toast.error("Error updating cart"); 
    }
  };

  const saveAddress = () => {
    if (address.trim()) {
      setIsAddressSaved(true);
      toast.success("Address saved successfully!");
    } else {
      toast.error("Please enter a valid address");
    }
  };

  return (
    <Box sx={{ backgroundColor: "black", color: "white", minHeight: "100vh", padding: "20px" }}>
      <Toaster />

      {/* Delivery Address Card */}
      <Card sx={{ backgroundColor: "#9370DB", color: "white", maxWidth: 400, margin: "auto", padding: 2, textAlign: "center" }}>
        <Typography variant="h6">Delivery Address</Typography>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          sx={{ backgroundColor: "white", borderRadius: 1, marginBottom: 2 }}
        />
        <Button variant="contained" sx={{ backgroundColor: "black", color: "lavender" }} onClick={saveAddress}>
          Save Address
        </Button>
      </Card>

      {/* Cart Items */}
      <Box sx={{ margin: "20px auto", maxWidth: 600 }}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Card key={item.id} sx={{ backgroundColor: "violet", color: "white", marginBottom: 2 }}>
              <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <img src={item.image} alt={item.name} width={50} height={50} style={{ borderRadius: "5px" }} />
                <Typography>{item.name}</Typography>
                <Typography>₹{item.price}</Typography>
                <Box>
                  <IconButton onClick={() => updateQuantity(item.id, -1)} sx={{ color: "lavender" }}>
                    <Remove />
                  </IconButton>
                  {item.quantity}
                  <IconButton onClick={() => updateQuantity(item.id, 1)} sx={{ color: "lavender" }}>
                    <Add />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography align="center">Your cart is empty</Typography>
        )}
      </Box>

      {/* Total Price & Checkout */}
      <Box textAlign="center">
        <Typography variant="h5" sx={{ marginBottom: 2 }}>Total: ₹{totalPrice}</Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "lavender", color: "black" }}
          disabled={!isAddressSaved || cartItems.length === 0}
          onClick={() => navigate("/payment")}
        >
          Proceed to Payment
        </Button>
      </Box>
    </Box>
  );
};

// "#2C2C2C"

export default CartPage;
